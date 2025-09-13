<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark();
</script>

<template>
  <div
    class="moonSunContainer top-5 -left-85 absolute flex justify-center items-center perspective-[1000px] gap-0"
    :class="{ darkMode: isDark, lightMode: !isDark }"
  >
    <div class="moon celestial-body relative w-[200px] h-[200px]">
      <div class="glow-effect moon-glow"></div>
      <div class="glow-effect moon-glow-secondary"></div>
      <img
        src="/moon300.png"
        alt="Imagen de la luna"
        class="celestial-image" />
    </div>
    <div class="sun celestial-body relative w-[200px] h-[200px]">
      <div class="glow-effect sun-glow"></div>
      <div class="glow-effect sun-glow-secondary"></div>
      <div class="sun-rays"></div>
      <img
        src="/sun300.png"
        alt="Imagen del sol"
        class="celestial-image" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.moonSunContainer {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}
.celestial-body {
  animation: rotateFull 80s linear infinite;
  transform-style: preserve-3d;
}
.celestial-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
}

.glow-effect {
  position: absolute;
  border-radius: 50%;
  z-index: 2;
  filter: blur(30px);
  opacity: 0;
  transition:
    opacity 1.5s ease,
    transform 1.5s ease;
}

.moon-glow {
  width: 180%;
  height: 180%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(173, 216, 230, 0.8) 0%,
    rgba(100, 150, 200, 0.6) 40%,
    transparent 80%
  );
}

.moon-glow-secondary {
  width: 220%;
  height: 220%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(100, 150, 200, 0.4) 0%,
    rgba(50, 100, 150, 0.3) 30%,
    transparent 70%
  );
  filter: blur(50px);
}

.sun-glow {
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 150, 0.9) 0%,
    rgba(255, 200, 50, 0.7) 50%,
    transparent 80%
  );
}

.sun-glow-secondary {
  width: 250%;
  height: 250%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(255, 220, 100, 0.6) 0%,
    rgba(255, 150, 50, 0.4) 40%,
    transparent 80%
  );
  filter: blur(60px);
}

.sun-rays {
  position: absolute;
  width: 250%;
  height: 250%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    transparent 40%,
    rgba(255, 255, 100, 0.3) 70%,
    transparent 90%
  );
  z-index: 2;
  opacity: 0;
  transition: opacity 1s ease;
}

.darkMode {
  animation: rotateToDark 2s ease-in-out forwards;

  .moon-glow,
  .moon-glow-secondary {
    opacity: 0.8;
  }

  .sun-glow,
  .sun-glow-secondary,
  .sun-rays {
    opacity: 0;
  }
}

.lightMode {
  animation: rotateToLight 2s ease-in-out forwards;

  .sun-glow,
  .sun-glow-secondary {
    opacity: 0.9;
  }

  .sun-rays {
    opacity: 0.4;
  }

  .moon-glow,
  .moon-glow-secondary {
    opacity: 0;
  }
}

@keyframes rotateToDark {
  from {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 180deg);
  }
}

@keyframes rotateToLight {
  from {
    transform: rotate3d(0, 0, 1, 180deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

@keyframes rotateFull {
  from {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>
