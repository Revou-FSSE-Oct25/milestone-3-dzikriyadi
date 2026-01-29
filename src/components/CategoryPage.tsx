"use client";

import Link from "next/link";
import { Category } from "@/types/product";
import { cn } from "@/lib/utils";
import React from "react";
import { useState, useEffect } from "react";

function CategoryPage() {
  const [categoryList, setCategoryList] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //2. Buat fetching function
  const fetchCategoryList = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories",
      );
      const data = await response.json();
      setCategoryList(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <section className="w-full  py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Shop by Category
          </h2>

          <p className="text-lg  max-w-2xl mx-auto">
            Find the perfect device for your needs from our curated collections
          </p>
        </div>

        {/* Categories Grid */}

        {categoryList && categoryList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryList.map((category: Category) => (
              <Link
                key={category.id}
                href="/"
                className="group relative h-72 rounded-lg overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={category.image}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  {/* <p className="text-sm text-gray-300">
                    {category.CategoryCount} Categorys
                  </p> */}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
