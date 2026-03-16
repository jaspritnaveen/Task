// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// 2. Add a Placeholder Brain (Icosahedron for demo)
// Note: In a real app, you would use GLTFLoader to load a 'brain.glb' model
const geometry = new THREE.IcosahedronGeometry(2, 1); // Rugged sphere looks like a brain core
const material = new THREE.MeshStandardMaterial({
  color: 0x00d9ff,
  wireframe: true,
  emissive: 0x004466,
});
const brain = new THREE.Mesh(geometry, material);
scene.add(brain);

// 3. Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 5;

// 4. Scroll Animation with GSAP
gsap.to(brain.rotation, {
  y: Math.PI * 4, // Rotate 2 full turns
  x: Math.PI * 1,
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: "bottom bottom",
    scrub: 1, // Smoothly links rotation to scroll
  },
});

// Pulse effect
gsap.to(brain.scale, {
  x: 1.1,
  y: 1.1,
  z: 1.1,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// 5. Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // Slow constant rotation even when not scrolling
  brain.rotation.y += 0.002;
  renderer.render(scene, camera);
}

// Handle Window Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
