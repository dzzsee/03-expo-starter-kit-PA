import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Palette, Layers, Code, CheckCircle } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

export default function NativeWindScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFDF9]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1" contentContainerClassName="px-5 pt-4 pb-36">
        {/* Encabezado */}
        <View className="mb-6 pb-4 border-b-[3px] border-black">
          <Badge label="RETO 02 · COMPONENTES Y TIPADO" tone="pink" />
          <View className="flex-row items-center gap-2 mt-2">
            <Palette size={26} color="#000" />
            <Text className="text-3xl font-black text-black uppercase">
              Galería de Componentes
            </Text>
          </View>
          <Text className="text-xs font-bold text-black/70 mt-1">
            Diseño modular y reutilización de elementos con Tailwind CSS (NativeWind v4).
          </Text>
        </View>

        {/* Enunciado Académico del Reto 02 */}
        <Card
          titulo="📘 ENUNCIADO ACADÉMICO · RETO 02 (1.00 PT)"
          subtitulo="Tipado de variantes y props en components/ui/Button.tsx"
          variante="yellow"
        >
          <Text className="text-xs font-bold text-black leading-relaxed mb-3">
            <Text>Misión:</Text> Abre el archivo <Text className="font-mono text-blue-700 font-bold">components/ui/Button.tsx</Text>. Define el tipo de unión <Text className="font-mono text-pink-700 font-bold">ButtonVariant</Text> con las 4 opciones requeridas: <Text className="font-mono">'primary' | 'secondary' | 'danger' | 'success'</Text>.
          </Text>
          <View className="bg-white/80 p-3 rounded-lg border-2 border-black gap-1.5">
            <Text className="font-extrabold text-xs text-black">🔍 Verificación del Reto:</Text>
            <Text className="text-xs font-medium text-black">1. Mapea los colores de Tailwind en el objeto <Text className="font-mono font-bold">variantStyles</Text>.</Text>
            <Text className="text-xs font-medium text-black">2. Comprueba que los botones mostrados abajo cambien de color correctamente.</Text>
            <Text className="text-xs font-medium text-black">3. Corre en tu terminal: <Text className="font-mono font-bold text-blue-700">pnpm run start:02</Text>.</Text>
          </View>
        </Card>

        {/* Catálogo de Botones */}
        <Card titulo="CATÁLOGO DE BOTONES TÁCTILES" variante="default">
          <View className="gap-3 mt-2">
            <Button label="Botón Primario (Amarillo Institucional)" variante="primary" />
            <Button label="Botón Secundario (Cian)" variante="secondary" />
            <Button label="Botón de Acción / Peligro" variante="danger" />
            <Button label="Botón de Éxito Salesiano" variante="success" />
          </View>
        </Card>

        {/* Píldoras e Insignias */}
        <Card titulo="INSIGNIAS Y ETIQUETAS DE ESTADO" variante="cyan">
          <View className="flex-row flex-wrap gap-2 mt-2">
            <Badge label="Expo SDK 54" tone="yellow" />
            <Badge label="NativeWind v4" tone="green" />
            <Badge label="TypeScript 5.x" tone="cyan" />
            <Badge label="Fast Refresh" tone="pink" />
            <Badge label="3° BGU UETS" tone="orange" />
          </View>
        </Card>

        {/* Variaciones de Tarjetas */}
        <Card titulo="VARIACIONES DE TARJETAS INFORMATIVAS" variante="green">
          <Text className="text-xs font-bold text-black mb-3">
            Cada tarjeta cuenta con bordes definidos y esquinas redondeadas para estructurar la información.
          </Text>
          <View className="gap-2">
            <Card titulo="Tarjeta Informativa Rosada" variante="pink">
              <Text className="text-xs font-semibold text-black">Variante rosada activa para alertas o advertencias.</Text>
            </Card>
            <Card titulo="Tarjeta Informativa Naranja" variante="orange">
              <Text className="text-xs font-semibold text-black">Variante naranja activa para notas de atención.</Text>
            </Card>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
