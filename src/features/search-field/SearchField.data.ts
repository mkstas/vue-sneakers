import { Ref, ref } from 'vue';
import { useCatalogStore } from '@/entities/product';

export const useSearchField = () => {
  const searchValue: Ref<string> = ref('');

  const catalogStore = useCatalogStore();

  const fetchSearchData = async () => {
    try {
      await catalogStore.searchByTitle(searchValue.value);
    } catch (error) {
      console.log(error);
    }
  };

  return { searchValue, fetchSearchData };
};
