import React, {useState, useEffect} from 'react';
import {getСategories } from '../api/category';
import CategoryCard from '../components/CategoryCard';
import '../styles/Home.css';

function Home() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getСategories();
            setCategories(data);
        };
        fetchData();
    }, []);

  return (
    <div>
        <h1 className="home-title">Все категории</h1>
        <div className="home-categories">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
    </div>
  );
}

export default Home;