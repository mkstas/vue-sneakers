import { computed } from 'vue';

export interface IProps {
  isFavourite: boolean;
}

export const useClasses = (isActive: boolean) => {
  const buttonClasses = computed(() => [
    'p-2 rounded-xl border',
    isActive ? 'bg-red-200 border-red-200' : 'border-neutral-200 group',
  ]);

  const iconClasses = computed(() => [
    'w-5 h-5 text-neutral-400',
    isActive
      ? 'fill-red-400 stroke-red-400'
      : 'group-hover:fill-red-400 group-hover:stroke-red-400',
  ]);

  return { buttonClasses, iconClasses };
};
