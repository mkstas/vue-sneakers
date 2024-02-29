import { computed } from 'vue';

export interface IProps {
  isAdded: boolean;
}

export const useClasses = (isActive: boolean) => {
  const buttonClasses = computed(() => [
    'p-2 rounded-xl border',
    isActive ? 'bg-green-600 border-green-600' : 'border-neutral-200 group',
  ]);

  return { buttonClasses };
};
