"use client";

import { useState } from "react";

import CategoryToolbar from "../../../components/admin/categories/CategoryToolbar";
import CategoriesTable from "../../../components/admin/categories/CategoriesTable";
import CategoryForm from "../../../components/admin/categories/CategoryForm";

export default function CategoriesPage() {

    const [showForm, setShowForm] = useState(false);

    return (

        <div className="space-y-8">

            <CategoryToolbar
                onNewCategory={() => setShowForm(true)}
            />

            {showForm && (
                <CategoryForm />
            )}

            <CategoriesTable />

        </div>

    );

}