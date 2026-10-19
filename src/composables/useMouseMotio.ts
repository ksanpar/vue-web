import { ref } from "vue";


interface Coordinatas {
  x: number;
  y: number;
}

export const useMouseMotio = () => {
 
const mousePositione = ref<Coordinatas>({ x: 0, y: 0 })

const cumMouseMove = (event: MouseEvent) => {

    const rect = (event.target as HTMLElement).getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    mousePositione.value = {
       x: (centerX - mouseX) * 0.1,
       y: (centerY - mouseY) * 0.1
    };
  }

  const cumMouseLeave = () => {
    mousePositione.value = {
       x: 0, 
       y: 0 
    };
  }
    return {
        mousePositione,
        cumMouseMove,
        cumMouseLeave
    }
}