import { defineStore } from "pinia";
import { httpRequest } from "~/services";

export const useGalleryStore = defineStore("galleryStore", () => {
  const gallery = ref<any[]>([]);
  const loading = ref(false);
  const selectedPhoto = ref();
  const setGallery = (data: any) => (gallery.value = data);
  const setLoading = (value: boolean) => (loading.value = value);
  const setSelectedPhoto = (value: any) => (selectedPhoto.value = value);
  const alert = useAlertStore();
  const mainStore = useMainStore();

  const addImageGallery = async (files: any) => {
    setLoading(true);

    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append("files", file); // The name 'files' should match @RequestParam("files")
    });
    await httpRequest
      .post("/gallery/upload-multiple", files)
      .then((res) => {
        setGallery(res.data);
        alert.success(res.message);
        mainStore.setAddModal(false);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getGallery = async () => {
    setLoading(true);
    await httpRequest
      .get("/gallery/all")
      .then((res) => {
        setGallery(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const deleteGallery = async (id: number) => {
    setLoading(true);
    await httpRequest
      .delete(`/gallery/delete/${id}`)
      .then((res) => {
        getGallery();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return { gallery, loading, addImageGallery, getGallery, deleteGallery, selectedPhoto,setSelectedPhoto };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGalleryStore, import.meta.hot));
}
