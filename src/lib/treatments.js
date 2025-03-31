
import fs from "fs";
import path from "path";

const treatmentsPath = path.join(process.cwd(), "src/app/data/treatments1.json");
const categoriesPath = path.join(process.cwd(), "src/app/data/treatmantCategories.json");

let cachedTreatments = null;
let cachedCategories = null;

function loadTreatments() {
  if (!cachedTreatments) {
    // Server-side dohvat podataka sa fs (radi samo na serveru)
    cachedTreatments = JSON.parse(fs.readFileSync(treatmentsPath, "utf-8"));
  }
  return cachedTreatments;
}

function loadCategories() {
  if (!cachedCategories) {
    // Server-side dohvat podataka sa fs (radi samo na serveru)
    cachedCategories = JSON.parse(fs.readFileSync(categoriesPath, "utf-8"));
  }
  return cachedCategories;
}

export function getAllTreatments() {
  return loadTreatments();
}

export function getGroupedTreatments() {
  const treatments = loadTreatments();
  const categories = loadCategories();

  // Kreiramo mapu kategorija sa slikama
  const categoryMap = categories.reduce((acc, category) => {
    acc[category.id] = category;  // Dodajemo kategoriju sa slikama
    return acc;
  }, {});

  return treatments.reduce((acc, treatment) => {
    const category = categoryMap[treatment.headlineId]; // Pronađi kategoriju na osnovu headlineId
    if (!category) return acc; // Ako kategorija nije pronađena, preskoči tretman

    const categoryName = category.title; // Uzmi naziv kategorije
    const categoryImage = category.image; // Uzmi sliku iz kategorije

    // Dodaj kategoriju i tretman u grupu
    if (!acc[categoryName]) {
      acc[categoryName] = { image: categoryImage, treatments: [] }; // Dodaj sliku zajedno sa tretmanima
    }
    acc[categoryName].treatments.push(treatment);

    return acc;
  }, {});
}


// Funkcija koja vraća jedan tretman po ID-u
export function getTreatmentById(id) {
  return loadTreatments().find((treatment) => treatment.id === id) || null;
}

export function getAllTreatmentIds() {
  return loadTreatments().map((treatment) => ({ params: { id: treatment.id } }));
}
