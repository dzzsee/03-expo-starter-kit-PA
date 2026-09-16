import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UtensilsCrossed, Sandwich, CupSoda, Sparkles, Trash2, ShoppingBag } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function PedidosScreen() {
  // TODO [RETO 04 - PASO 1]: Declara dos estados simples usando useState:
  // 1. 'total' para el dinero acumulado (inicializado en 0)
  // 2. 'items' para la cantidad de productos (inicializado en 0)
  // const [total, setTotal] = useState(0);
  // const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  // TODO [RETO 04 - PASO 2]: Programa las funciones de suma directa al total y conteo de items:
  const agregarSanduche = () => {
    // TODO: Sumar 1 a items y sumar 1.25 al total
    setTotal(total + 1.25);
    setItems(items + 1);
  };

  const agregarEmpanada = () => {
    // TODO: Sumar 1 a items y sumar 0.75 al total
    setTotal(total + 0.75);
    setItems(items + 1);
  };

  const agregarJugo = () => {
    // TODO: Sumar 1 a items y sumar 0.80 al total
    setTotal(total + 0.80);
    setItems(items + 1);
  };

  const vaciarCarrito = () => {
    // TODO: Reiniciar total e items a 0
    setTotal(0);
    setItems(0);
  };

  const total = 0; // TODO: Conectar con tu estado useState 'total'
  const items = 0; // TODO: Conectar con tu estado useState 'items'
  const tieneDescuento = total >= 5.0;

  return (
    <SafeAreaView className="flex-1 bg-[#FFFDF9]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1" contentContainerClassName="px-5 pt-4 pb-36">
        {/* Encabezado */}
        <View className="mb-6 pb-4 border-b-[3px] border-black">
          <Badge label="RETO 04 · DESAFÍO INTEGRADOR" tone="orange" />
          <View className="flex-row items-center gap-2 mt-2">
            <UtensilsCrossed size={26} color="#000" />
            <Text className="text-3xl font-black text-black uppercase">
              Bar Salesiano UETS
            </Text>
          </View>
          <Text className="text-xs font-bold text-black/70 mt-1">
            Gestión reactiva de pedidos móviles para el recreo institucional.
          </Text>
        </View>

        {/* Enunciado Académico del Reto 04 */}
        <Card
          titulo="📘 ENUNCIADO ACADÉMICO · RETO 04 (1.00 PT)"
          subtitulo="Carrito de compras con acumuladores en app/(tabs)/pedidos.tsx"
          variante="yellow"
        >
          <Text className="text-xs font-bold text-black leading-relaxed mb-3">
            <b>Misión:</b> Abre este archivo (<Text className="font-mono text-blue-700 font-bold">app/(tabs)/pedidos.tsx</Text>). Declara dos estados con <Text className="font-mono text-pink-700 font-bold">useState(0)</Text>: <Text className="font-mono font-bold">[total, setTotal]</Text> y <Text className="font-mono font-bold">[items, setItems]</Text>.
          </Text>
          <View className="bg-white/80 p-3 rounded-lg border-2 border-black gap-1.5">
            <Text className="font-extrabold text-xs text-black">🔍 Verificación del Reto:</Text>
            <Text className="text-xs font-medium text-black">1. Sanduche de Pollo: suma +1 item y +$1.25 al total.</Text>
            <Text className="text-xs font-medium text-black">2. Empanada de Viento: suma +1 item y +$0.75 al total.</Text>
            <Text className="text-xs font-medium text-black">3. Jugo Natural: suma +1 item y +$0.80 al total.</Text>
            <Text className="text-xs font-medium text-black">4. Vaciar Carrito: restablece total e items a 0.</Text>
            <Text className="text-xs font-medium text-black">5. Corre en tu terminal: <Text className="font-mono font-bold text-blue-700">pnpm run start:04</Text>.</Text>
          </View>
        </Card>

        {/* Menú del Recreo con Iconos Lucide */}
        <View className="flex-row items-center gap-2 mb-3">
          <ShoppingBag size={20} color="#000" />
          <Text className="text-lg font-black uppercase text-black">
            Menú del Recreo
          </Text>
        </View>
        
        <View className="gap-3 mb-6">
          {/* Sanduche */}
          <Card className="p-3.5" variante="default">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="bg-yellow-300 p-2 rounded-lg border-2 border-black">
                  <Sandwich size={22} color="#000" />
                </View>
                <View>
                  <Text className="font-extrabold text-sm text-black">Sanduche de Pollo</Text>
                  <Text className="text-xs font-bold text-black/60">$1.25</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={agregarSanduche}
                activeOpacity={0.7}
                className="bg-yellow-300 border-2 border-black rounded-lg px-3 py-2 shadow-[2px_2px_0px_0px_#000]"
              >
                <Text className="font-extrabold text-xs text-black">+ Agregar $1.25</Text>
              </TouchableOpacity>
            </View>
          </Card>

          {/* Empanada */}
          <Card className="p-3.5" variante="default">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="bg-orange-300 p-2 rounded-lg border-2 border-black">
                  <UtensilsCrossed size={22} color="#000" />
                </View>
                <View>
                  <Text className="font-extrabold text-sm text-black">Empanada de Viento</Text>
                  <Text className="text-xs font-bold text-black/60">$0.75</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={agregarEmpanada}
                activeOpacity={0.7}
                className="bg-yellow-300 border-2 border-black rounded-lg px-3 py-2 shadow-[2px_2px_0px_0px_#000]"
              >
                <Text className="font-extrabold text-xs text-black">+ Agregar $0.75</Text>
              </TouchableOpacity>
            </View>
          </Card>

          {/* Jugo */}
          <Card className="p-3.5" variante="default">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-3">
                <View className="bg-pink-300 p-2 rounded-lg border-2 border-black">
                  <CupSoda size={22} color="#000" />
                </View>
                <View>
                  <Text className="font-extrabold text-sm text-black">Jugo Natural de Mora</Text>
                  <Text className="text-xs font-bold text-black/60">$0.80</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={agregarJugo}
                activeOpacity={0.7}
                className="bg-yellow-300 border-2 border-black rounded-lg px-3 py-2 shadow-[2px_2px_0px_0px_#000]"
              >
                <Text className="font-extrabold text-xs text-black">+ Agregar $0.80</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        {/* Resumen */}
        <Card titulo="RESUMEN DEL PEDIDO" variante="yellow">
          <View className="flex-row justify-between mb-2">
            <Text className="font-extrabold text-xs text-black">Total Productos:</Text>
            <Text className="font-bold text-xs text-black">{items} unidad(es)</Text>
          </View>
          <View className="flex-row justify-between border-t-2 border-black/20 pt-2 mb-2">
            <Text className="font-black text-sm text-black uppercase">Total a Pagar:</Text>
            <Text className="font-black text-sm text-black">${total}</Text>
          </View>

          {tieneDescuento && (
            <View className="bg-emerald-300 border-2 border-black p-2 rounded mb-3 flex-row items-center justify-center gap-1.5">
              <Sparkles size={16} color="#000" />
              <Text className="font-extrabold text-xs text-black text-center">
                ¡Descuento Salesiano del Recreo Activado!
              </Text>
            </View>
          )}

          <View className="gap-2">
            <Button
              label={items > 0 ? "Confirmar Pedido Móvil" : "Selecciona Productos"}
              variante={items > 0 ? "success" : "secondary"}
              disabled={items === 0}
              onPress={() => Alert.alert("Bar Salesiano", `¡Pedido confirmado por $${total}! Retíralo en el Bar Salesiano.`)}
            />
            {items > 0 && (
              <Button
                label="Vaciar Carrito"
                variante="danger"
                onPress={vaciarCarrito}
              />
            )}
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
