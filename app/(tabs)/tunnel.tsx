import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wifi, WifiOff, CloudLightning, ShieldCheck, Network, Info } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';

export default function TunnelScreen() {
  // TODO [RETO 03 - PASO 1]: Declara el estado booleano 'tunelActivo' inicializado en false usando useState(false)
  // const [tunelActivo, setTunelActivo] = useState(false);
  const [tunelActivo, setTunelActivo] = useState(false);
  // TODO [RETO 03 - PASO 2]: Programa la función toggleTunel para alternar entre true y false
  const toggleTunel = () => {
    setTunelActivo(!tunelActivo);
  }; 
  return (
    <SafeAreaView className="flex-1 bg-[#FFFDF9]" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1" contentContainerClassName="px-5 pt-4 pb-36">
        {/* Encabezado */}
        <View className="mb-6 pb-4 border-b-[3px] border-black">
          <Badge label="RETO 03 · REACTIVIDAD CON USESTATE" tone="green" />
          <View className="flex-row items-center gap-2 mt-2">
            <Network size={26} color="#000" />
            <Text className="text-3xl font-black text-black uppercase">
              Modo Túnel UETS
            </Text>
          </View>
          <Text className="text-xs font-bold text-black/70 mt-1">
            Supera el aislamiento de la red WiFi institucional alternando el estado reactivo.
          </Text>
        </View>

        {/* Enunciado Académico del Reto 03 */}
        <Card
          titulo="📘 ENUNCIADO ACADÉMICO · RETO 03 (1.00 PT)"
          subtitulo="Control de estado booleano en app/(tabs)/tunnel.tsx"
          variante="yellow"
        >
          <Text className="text-xs font-bold text-black leading-relaxed mb-3">
            <b>Misión:</b> Abre este archivo (<Text className="font-mono text-blue-700 font-bold">app/(tabs)/tunnel.tsx</Text>). Descomenta y utiliza el hook <Text className="font-mono text-pink-700 font-bold">useState(false)</Text> para crear el estado reactivo <Text className="font-mono font-bold">[tunelActivo, setTunelActivo]</Text>.
          </Text>
          <View className="bg-white/80 p-3 rounded-lg border-2 border-black gap-1.5">
            <Text className="font-extrabold text-xs text-black">🔍 Verificación del Reto:</Text>
            <Text className="text-xs font-medium text-black">1. Conecta la función <Text className="font-mono font-bold">toggleTunel</Text> al botón de abajo.</Text>
            <Text className="text-xs font-medium text-black">2. Al pulsar el botón, la tarjeta debe cambiar a verde ("TÚNEL CONECTADO").</Text>
            <Text className="text-xs font-medium text-black">3. Corre en tu terminal: <Text className="font-mono font-bold text-blue-700">pnpm run start:03</Text>.</Text>
          </View>
        </Card>

        {/* Tarjeta de Estado Reactivo */}
        <Card
          titulo={tunelActivo ? "TÚNEL CONECTADO" : "RED LAN BLOQUEADA"}
          variante={tunelActivo ? "green" : "pink"}
        >
          <View className="flex-row items-center gap-2 mb-3">
            {tunelActivo ? (
              <Wifi size={24} color="#000" />
            ) : (
              <WifiOff size={24} color="#000" />
            )}
            <Text className="text-sm font-black text-black uppercase">
              {tunelActivo ? "Conectado vía Expo Cloud" : "Bloqueado por Client Isolation"}
            </Text>
          </View>

          <Text className="text-xs font-bold text-black leading-relaxed mb-3">
            {tunelActivo
              ? "El túnel seguro de Expo está activo. Tu celular se comunica directamente mediante los servidores en la nube de Expo."
              : "La red institucional de la UETS aísla los dispositivos clientes (Client Isolation). Tu celular no puede ver la IP privada de tu computadora."}
          </Text>

          <View className="bg-white/80 p-3 rounded-lg border-2 border-black mb-3 flex-row items-center gap-2">
            <CloudLightning size={18} color="#000" />
            <Text className="font-extrabold text-xs text-black">
              URL: {tunelActivo ? "exp://bar-salesiano.exp.direct:80" : "exp://192.168.10.45:8081 (Sin Conexión)"}
            </Text>
          </View>

          <Button
            label={tunelActivo ? "Desconectar Túnel" : "Activar Modo Túnel (--tunnel)"}
            variante={tunelActivo ? "danger" : "success"}
            onPress={toggleTunel}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
