import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Smartphone, BookOpen, Layers, Terminal, Video, Award } from 'lucide-react-native';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export default function IndexScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#FFFDF9]">
      <ScrollView className="flex-1" contentContainerClassName="px-5 pt-4 pb-36">
        {/* Encabezado Institucional */}
        <View className="mb-6 pb-4 border-b-[3px] border-black">
          <View className="flex-row items-center justify-between mb-2">
            <Badge label="SEMANA 03 · EXPO SDK 54" tone="yellow" />
            <Text className="text-xs font-extrabold text-black/70">3° BGU UETS · 2026-2027</Text>
          </View>
          <View className="flex-row items-center gap-2 mt-1">
            <Smartphone size={28} color="#000" />
            <Text className="text-3xl font-black text-black tracking-tight uppercase">
              Starter-Kit Móvil
            </Text>
          </View>
          <Text className="text-sm font-semibold text-black/70 mt-1">
            Módulo de Aplicaciones Web y Móviles · Unidad Educativa Técnico Salesiano
          </Text>
        </View>

        {/* Enunciado Académico Principal */}
        <Card
          titulo="📘 GUÍA DEL ESTUDIANTE · MISIÓN DE LA SEMANA"
          subtitulo="Lee con atención las instrucciones antes de comenzar a codificar"
          variante="yellow"
        >
          <Text className="text-xs font-bold text-black leading-relaxed mb-3">
            ¡Bienvenido a tu primera aplicación móvil interactiva! Tu objetivo durante esta semana es completar los 4 retos prácticos modificando el código fuente en VS Code y observando los cambios reflejados en tiempo real.
          </Text>
          <View className="bg-white/80 p-3 rounded-lg border-2 border-black gap-1.5">
            <Text className="font-extrabold text-xs text-black">🎯 Pasos para trabajar en tu taller:</Text>
            <Text className="text-xs font-medium text-black">1. Abre cada pestaña en la barra inferior para ver el enunciado de cada reto.</Text>
            <Text className="text-xs font-medium text-black">2. Resuelve los bloques <Text className="font-mono font-bold text-pink-600">// TODO:</Text> en los archivos correspondientes.</Text>
            <Text className="text-xs font-medium text-black">3. Valida en tu terminal con <Text className="font-mono font-bold text-blue-700">pnpm run start:01</Text> a <Text className="font-mono font-bold text-blue-700">04</Text>.</Text>
          </View>
        </Card>

        {/* Tarjeta de Estado del Taller */}
        <Card
          titulo="PONDERACIÓN DE LOS 4 RETOS PRÁCTICOS"
          subtitulo="Bloque A (50% de la nota total · 4.00 pts de retos + 1.00 pt de calidad)"
          variante="default"
        >
          <View className="gap-2.5 mt-2">
            <View className="flex-row items-center justify-between bg-white/90 p-2.5 rounded-lg border-2 border-black">
              <View className="flex-row items-center gap-2">
                <Layers size={16} color="#000" />
                <Text className="font-extrabold text-xs text-black">Reto 01: app.json y Metadatos</Text>
              </View>
              <Badge label="1.00 pt" tone="cyan" />
            </View>
            <View className="flex-row items-center justify-between bg-white/90 p-2.5 rounded-lg border-2 border-black">
              <View className="flex-row items-center gap-2">
                <Layers size={16} color="#000" />
                <Text className="font-extrabold text-xs text-black">Reto 02: Button.tsx y Tipado de Props</Text>
              </View>
              <Badge label="1.00 pt" tone="pink" />
            </View>
            <View className="flex-row items-center justify-between bg-white/90 p-2.5 rounded-lg border-2 border-black">
              <View className="flex-row items-center gap-2">
                <Layers size={16} color="#000" />
                <Text className="font-extrabold text-xs text-black">Reto 03: Diagnóstico Red UETS y useState</Text>
              </View>
              <Badge label="1.00 pt" tone="green" />
            </View>
            <View className="flex-row items-center justify-between bg-white/90 p-2.5 rounded-lg border-2 border-black">
              <View className="flex-row items-center gap-2">
                <Layers size={16} color="#000" />
                <Text className="font-extrabold text-xs text-black">Reto 04: Bar Salesiano con Acumuladores</Text>
              </View>
              <Badge label="1.00 pt" tone="orange" />
            </View>
          </View>
        </Card>

        {/* Guía Rápida de Comandos */}
        <Card
          titulo="COMANDOS DE VALIDACIÓN EN TERMINAL"
          subtitulo="Ejecuta estos scripts en tu computadora para comprobar tus respuestas"
          variante="cyan"
        >
          <View className="bg-black p-3 rounded-lg border-2 border-black">
            <Text className="text-yellow-300 font-mono text-xs font-bold">$ pnpm start</Text>
            <Text className="text-white/60 text-[11px] mt-0.5 font-mono"># Inicia la app en modo túnel para tu celular</Text>
            
            <Text className="text-emerald-300 font-mono text-xs font-bold mt-2.5">$ pnpm run test:all</Text>
            <Text className="text-white/60 text-[11px] mt-0.5 font-mono"># Ejecuta la suite de pruebas unitarias</Text>

            <Text className="text-pink-300 font-mono text-xs font-bold mt-2.5">$ pnpm run check</Text>
            <Text className="text-white/60 text-[11px] mt-0.5 font-mono"># Verifica 0 errores de TypeScript</Text>
          </View>
        </Card>

        {/* Recordatorio Evaluativo MIT */}
        <Card
          titulo="EVALUACIÓN DUAL MIT (10.0 PUNTOS)"
          subtitulo="50% Pull Request en GitHub + 50% Screencast de 3 min"
          variante="pink"
        >
          <View className="flex-row items-center gap-2 mb-2">
            <Video size={18} color="#000" />
            <Text className="text-xs font-black text-black uppercase">Defensa Oral en Video</Text>
          </View>
          <Text className="text-xs font-bold text-black leading-relaxed">
            Al terminar tus 4 retos y pasar las pruebas en verde, graba un video de máximo 3 minutos mostrando tu rostro, la terminal con los tests y la app corriendo en tu celular con Expo Go. Pega el enlace en la descripción del Pull Request.
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
