import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

// TODO [RETO 02 - PASO 1]: Define el tipo ButtonVariant con los 4 colores de la UETS:
// 'primary' | 'secondary' | 'danger' | 'success'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';


// TODO [RETO 02 - PASO 2]: Extiende la interfaz ButtonProps con label, variante y onPress usando TouchableOpacityProps
export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variante?: ButtonVariant;
  className?: string;
  onPress?: () => void;
}

// TODO [RETO 02 - PASO 3]: Mapea cada variante con sus clases de Tailwind en variantStyles:
// - primary: 'bg-yellow-300 text-black'
// - secondary: 'bg-cyan-300 text-black'
// - danger: 'bg-pink-400 text-black'
// - success: 'bg-emerald-300 text-black'
export const variantStyles: Record<string, string> = {
  primary: 'bg-yellow-300 text-black',
  secondary: 'bg-cyan-300 text-black',
  danger: 'bg-pink-400 text-black',
  success: 'bg-emerald-300 text-black'
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variante = 'primary',
  className = '',
  onPress,
  disabled,
  ...props
}) => {
  const currentVariant = variantStyles[variante] || 'bg-yellow-300 text-black';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className={`border-[3px] border-black rounded-lg py-3 px-5 items-center justify-center shadow-[3px_3px_0px_0px_#000000] ${currentVariant} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      {...props}
    >
      <Text className="text-sm font-black uppercase tracking-wider text-black">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
