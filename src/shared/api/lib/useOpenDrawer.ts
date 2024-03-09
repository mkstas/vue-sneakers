import { Ref, ref } from 'vue';

export const useOpenDrawer = () => {
  const isOpenDrawer: Ref<boolean> = ref(false);

  const openDrawer = () => {
    isOpenDrawer.value = true;
  };

  const closeDrawer = () => {
    isOpenDrawer.value = false;
  };

  return { isOpenDrawer, openDrawer, closeDrawer };
};
