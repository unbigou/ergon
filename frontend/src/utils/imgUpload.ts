export const imgUpload = async (files: File[]) => {
  if (!files) return null;

  const media = [];

  for (const file in files) {
    const formData = new FormData();
    formData.append("file", files[file]);
    formData.append("upload_preset", "ergon_products");
    formData.append("cloud_name", "dfbfjrkoj");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dfbfjrkoj/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      media.push(data.secure_url);
    } catch (err) {
      console.log(err);
    }
  }

  return media;
};
