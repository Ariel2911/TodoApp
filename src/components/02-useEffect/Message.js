import { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    const mouseMove = (e) => {
        //   consy coors = { x: e.x, y: e.y}
        //   console.log(cords);
      console.log(':D');
    };
    //   console.log('componente montado')
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('componente desmontado');
      window.removeEventListener('mousemove', mouseMove)
    };
  }, []);

  return <p>Hola !!</p>;
};
