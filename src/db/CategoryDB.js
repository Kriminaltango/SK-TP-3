const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCategories = async () => { 
  const allCategories = await prisma.category.findMany();
  return allCategories;
};

const getOneCategory = async (id) => {
  const category = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return category;
};

const createNewCategory = async (newCategory) => {
  const createdCategory = await prisma.category.create({
    data: newCategory
  });
  return createdCategory;
};

const updateCategory = async (id, newData) => {
  const updatedCategory = await prisma.category.update({
    where: {
      id: id,
    },
    data: newData,
  });
  return updatedCategory;
};

const deleteCategory = async (id) => {
  const deletedCategory = await prisma.category.delete({
    where: {
      id: id,
    }
  });
  return deletedCategory;
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory
};
