export interface Product {
    id: string
    title: string
    price: number
    src: string[]
    sizes: Sizes
}

interface Sizes {
    xs: number
    s: number
    m: number
    l: number 
    xl: number
    xxl: number
}

export type GenderProducts = Product[]

export interface SharedProps {
  currentGender: GenderProducts;
  srcIndex: number;
  product: number;
  isZoomed: boolean;
  setIsZoomed: (value: boolean) => void;
}

export interface ImageViewerProps extends SharedProps {
    setSrcIndex: (value: number) => void;
}

export interface ZoomModalProps extends Omit<SharedProps, 'setIsZoomed'> {
    setIsZoomed: (value: boolean) => void;
}