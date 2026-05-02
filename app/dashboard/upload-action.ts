'use server'

export async function handleImageUpload(formData: FormData) {
  const file = formData.get('profileImage') as File;
  
  if (!file) return { success: false, error: "No file selected" };

  // This is where we will call the Selise Storage SDK
  console.log("File received for upload:", file.name);
  
  return { 
    success: true, 
    url: "https://via.placeholder.com/150" // Placeholder for now
  };
}