import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`container mx-auto px-4 py-8 transition-all duration-300 ${
      theme === 'theme1' ? 'bg-gray-100 font-[Roboto]' :
      theme === 'theme2' ? 'bg-gray-800 text-white font-[Merriweather] flex' :
      'bg-yellow-100 font-[Pacifico]'
    }`}>
      {theme === 'theme2' && (
        <aside className="w-1/4 p-4 bg-gray-900">
          <h2 className="text-xl mb-4">Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </aside>
      )}
      <div className={theme === 'theme2' ? 'w-3/4 p-4' : 'w-full'}>
        <h1 className={`text-3xl mb-4 ${theme === 'theme3' ? 'text-purple-600' : ''}`}>
          Welcome to ThemeApp
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button
          className={`px-4 py-2 rounded mb-4 ${
            theme === 'theme1' ? 'bg-blue-500 text-white' :
            theme === 'theme2' ? 'bg-red-600 text-white' :
            'bg-green-500 text-white'
          }`}
        >
          Click Me
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div
            className={`${
              theme === 'theme3'
                ? 'grid grid-cols-1 md:grid-cols-3 gap-4'
                : 'space-y-4'
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`p-4 ${
                  theme === 'theme1' ? 'bg-white shadow' :
                  theme === 'theme2' ? 'bg-gray-700' :
                  'bg-white rounded-lg shadow-lg'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-contain mb-2"
                />
                <h3 className="text-lg">{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;