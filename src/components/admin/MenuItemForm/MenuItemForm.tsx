import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { type IMenuItem, type IMenuItemFormData } from '../../../types';
import { FormInput, FormSelect, FormTextarea } from '../../common';

const categoryOptions = [
  { value: '', label: 'Select category' },
  { value: 'Starters', label: 'Starters' },
  { value: 'Mains', label: 'Mains' },
  { value: 'Desserts', label: 'Desserts' },
  { value: 'Drinks', label: 'Drinks' },
];

interface IMenuItemFormProps {
  item?: IMenuItem | null;
  onSubmit: (data: IMenuItemFormData) => void;
  onCancel: () => void;
  loading: boolean;
}

const MenuItemForm = ({
  item,
  onSubmit,
  onCancel,
  loading,
}: IMenuItemFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMenuItemFormData>();

  const isEditing = !!item;

  useEffect(() => {
    if (item) {
      reset({
        name: item.name,
        description: item.description,
        price: String(item.price),
        category: item.category,
        available: item.available,
      });
    }
  }, [item, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-cream/5 bg-cream/5 flex flex-col gap-6 rounded-2xl border p-8"
    >
      <h3 className="font-display text-cream text-lg font-bold">
        {isEditing ? 'Edit Menu Item' : 'Add Menu Item'}
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          label="Name"
          placeholder="Truffle Burrata"
          required
          register={register('name', {
            required: 'Name is required',
          })}
          error={errors.name?.message}
        />
        <FormSelect
          label="Category"
          required
          options={categoryOptions}
          register={register('category', {
            required: 'Category is required',
          })}
          error={errors.category?.message}
        />
      </div>

      <FormTextarea
        label="Description"
        placeholder="A short description of the dish..."
        register={register('description', {
          required: 'Description is required',
        })}
        error={errors.description?.message}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          label="Price"
          type="number"
          placeholder="18"
          required
          register={register('price', {
            required: 'Price is required',
            min: { value: 0.01, message: 'Price must be greater than 0' },
          })}
          error={errors.price?.message}
        />
        <div className="flex items-end">
          <label className="flex cursor-pointer items-center gap-3 pb-3">
            <input
              type="checkbox"
              {...register('available')}
              className="border-cream/10 bg-cream/5 accent-burgundy h-5 w-5 rounded"
            />
            <span className="text-cream text-sm font-medium">
              Available on menu
            </span>
          </label>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="bg-burgundy font-display text-cream hover:bg-burgundy-light rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Saving...' : isEditing ? 'Update Item' : 'Add Item'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border-cream/10 text-warm-gray hover:text-cream rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default MenuItemForm;
