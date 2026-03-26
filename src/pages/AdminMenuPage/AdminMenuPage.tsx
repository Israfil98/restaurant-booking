import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { MenuItemForm } from '../../components/admin';
import {
  AnimatedElement,
  LoadingSpinner,
  StatusBadge,
} from '../../components/common';
import { useManageMenuItems } from '../../hooks';
import { MENU_CATEGORIES } from '../../lib/constants';
import { type IMenuItem, type IMenuItemFormData } from '../../types';

const AdminMenuPage = () => {
  const { menuItems, loading, error, addItem, updateItem, deleteItem } =
    useManageMenuItems();
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<IMenuItem | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAdd = () => {
    setEditingItem(null);
    setShowForm(true);
  };

  const handleEdit = (item: IMenuItem) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingItem(null);
  };

  const handleSubmit = async (data: IMenuItemFormData) => {
    setFormLoading(true);

    const itemData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      available: data.available,
    };

    const success = editingItem
      ? await updateItem(editingItem.id, itemData)
      : await addItem(itemData);

    if (success) {
      setShowForm(false);
      setEditingItem(null);
    }

    setFormLoading(false);
  };

  const handleDelete = async (id: string) => {
    await deleteItem(id);
  };

  return (
    <section className="bg-warm-dark min-h-screen py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <AnimatedElement
              as="span"
              className="font-display text-burgundy-light mb-2 inline-block text-sm font-medium tracking-[0.3em] uppercase"
            >
              Admin Panel
            </AnimatedElement>
            <AnimatedElement
              as="h1"
              delay={0.15}
              className="font-display text-cream text-4xl font-bold sm:text-5xl"
            >
              Menu Items
            </AnimatedElement>
          </div>
          {!showForm && (
            <button
              onClick={handleAdd}
              className="bg-burgundy text-cream hover:bg-burgundy-light flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
            >
              <Plus size={16} />
              Add Item
            </button>
          )}
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-12">
            <MenuItemForm
              item={editingItem}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              loading={formLoading}
            />
          </div>
        )}

        {/* Category filter */}
        <AnimatedElement delay={0.3} className="mb-8 flex flex-wrap gap-3">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-display rounded-lg px-5 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                activeCategory === category
                  ? 'bg-burgundy text-cream'
                  : 'border-cream/10 text-warm-gray hover:text-cream border'
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedElement>

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Error */}
        {error && <p className="text-center text-red-400">{error}</p>}

        {/* Menu items list */}
        {!loading && !error && (
          <div className="flex flex-col gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border-cream/5 bg-cream/5 flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-cream text-lg font-bold">
                      {item.name}
                    </h3>
                    <span className="font-display text-burgundy-light text-xs font-medium tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                    {!item.available && <StatusBadge status="Unavailable" />}
                  </div>
                  <p className="text-warm-gray mb-2 text-sm">
                    {item.description}
                  </p>
                  <p className="font-display text-burgundy-light text-lg font-bold">
                    ${item.price}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-cream/5 text-warm-gray hover:bg-cream/10 hover:text-cream flex items-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors"
                  >
                    <Pencil size={14} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center gap-1.5 rounded-md bg-red-400/10 px-3 py-2 text-xs font-medium text-red-400 transition-colors hover:bg-red-400/20"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="text-warm-gray py-12 text-center">
                No menu items found.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminMenuPage;
