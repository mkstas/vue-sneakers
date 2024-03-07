import { Ref, ref } from 'vue';
import { useProductStore } from '@/entities/product';

export const useSearchField = () => {
  const searchValue: Ref<string> = ref('');

  const productStore = useProductStore();

  const fetchSearchData = async () => {
    try {
      await productStore.searchByName(searchValue.value);
    } catch (error) {
      console.log(error);
    }
  };

  return { searchValue, fetchSearchData };
};
