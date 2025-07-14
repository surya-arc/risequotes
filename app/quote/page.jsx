'use client';
import { useState, useEffect, use } from 'react'
 
const animeQuote = () => {
  const [Quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  
  const URL = 'https://api.quotable.io/quotes/random';
  
  const fetchQuotes = async() => {
    setIsLoading(true);
    
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      if (data && data.length > 0) {
        setQuote(data[0]);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    fetchQuotes();
  },[]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return(
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full transition-colors duration-300 ${
          isDark 
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <div className={`max-w-2xl w-full text-center rounded-lg p-8 transition-colors duration-300 ${
        isDark 
          ? 'border border-gray-700 bg-gray-800' 
          : 'border border-gray-200 bg-white'
      }`}>
        {!isLoading && Quote ? (
          <>
            <p className={`text-xl sm:text-2xl mb-6 leading-relaxed pl-4 italic transition-colors duration-300 ${
              isDark 
                ? 'text-gray-100 border-l-2 border-gray-600' 
                : 'text-gray-900 border-l-2 border-gray-300'
            }`}>
              {Quote.content}
            </p>
            <p className={`mb-8 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {Quote.author}
            </p>
            <button 
              onClick={fetchQuotes}
              className={`font-medium underline border-b border-transparent transition-colors duration-300 ${
                isDark 
                  ? 'text-blue-400 hover:text-blue-300 hover:border-blue-400' 
                  : 'text-blue-600 hover:text-blue-800 hover:border-blue-600'
              }`}
              disabled={isLoading}
            >
              Another quote
            </button>
          </>
        ) : (
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Loading...
          </p>
        )}
      </div>
    </div>
  );

}


export default animeQuote