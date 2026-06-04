import { useEffect, useState, useCallback, memo } from 'react';
import './Preloader.scss';

const Preloader = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Мемоизированный обработчик завершения загрузки
  const handleLoadComplete = useCallback(() => {
    setProgress(100);
    
    // Используем более быструю анимацию исчезновения
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Уменьшили с 500ms до 300ms
  }, []);

  useEffect(() => {
    // Более быстрый прогресс
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 15; // Увеличили шаг с 10 до 15
      });
    }, 150); // Уменьшили интервал с 200ms до 150ms

    // Проверяем состояние загрузки
    if (document.readyState === 'complete') {
      handleLoadComplete();
    } else {
      // Устанавливаем максимальное время показа прелоадера
      const maxTimeout = setTimeout(() => {
        handleLoadComplete();
      }, 3000); // Максимум 3 секунды

      const handleLoad = () => {
        clearTimeout(maxTimeout);
        handleLoadComplete();
      };

      window.addEventListener('load', handleLoad);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(maxTimeout);
        window.removeEventListener('load', handleLoad);
      };
    }

    return () => {
      clearInterval(progressInterval);
    };
  }, [handleLoadComplete]);

  // Не рендерим компонент если загрузка завершена
  if (!isLoading) return null;

  return (
    <div className={`container-preloader ${!isLoading ? 'loaded' : ''}`}>
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          {['A', 'L', 'E', 'K'].map((letter, index) => (
            <span
              key={index}
              className="characters"
              data-text={letter}
              style={{
                animationDelay: `${index * 0.1}s` // Добавляем задержку анимации
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        {/* Добавляем индикатор прогресса */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;