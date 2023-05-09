import { createSignal } from 'solid-js';
import { useFirebaseApp } from 'solid-firebase';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const Camera = () => {
  const app = useFirebaseApp();
  const storage = getStorage(app);
  const [imageSrc, setImageSrc] = createSignal(null);

  const takePhoto = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // For the rear camera

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };

  const uploadImage = async () => {
    let imageSrc1 = imageSrc();
    if (!imageSrc1) return;

    const storageRef = ref(storage, 'images/');
    const base64String =  imageSrc1.split(',')[1]; // Remove the "data:image/png;base64," part
    const file = new Blob([Uint8Array.from(atob(base64String), c => c.charCodeAt(0))], { type: 'image/png' });

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
        // You can handle progress updates here if needed
      },
      (error) => {
        console.error('Error uploading image:', error);
      },
      () => {
        console.log('Image uploaded successfully');
      });
  };

  return (
    <>
      <button onclick={takePhoto}>Take Photo</button>
      <button onclick={uploadImage}>Upload Photo</button>
      {imageSrc() && <img src={imageSrc() ?? ''} alt="Uploaded Image" />}
    </>
  );
};

export default Camera;
