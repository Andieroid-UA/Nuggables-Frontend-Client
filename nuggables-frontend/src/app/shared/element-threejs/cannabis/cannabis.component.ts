import { Component, ElementRef, NgZone, AfterViewInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

@Component({
  selector: 'app-cannabis',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cannabis.component.html',
  styleUrl: './cannabis.component.scss'
})
export class CannabisComponent implements AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private model!: THREE.Group; // Define a variable to hold the loaded model

  private ambientLight!: THREE.AmbientLight;
  private directionalLight!: THREE.DirectionalLight;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.scene = new THREE.Scene();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Set camera position (closer to the model)
    this.camera.position.set(-.4, .75, 0.5); // Adjust camera position to be closer to the model

    // Create renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Load background texture
    const textureLoader = new TextureLoader();
    const backgroundImage = textureLoader.load('assets/img/Tent.PNG'); // Replace with your actual image file path

    // Set background texture
    this.scene.background = backgroundImage;

    // Append renderer to DOM
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Add lighting
    this.ambientLight = new THREE.AmbientLight(0xdddddd, 0.5); // Lighten the ambient light color
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(this.directionalLight);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load(
      'assets/3D/Cannabis.gltf',
      (gltf) => {
        this.model = gltf.scene; // Store the loaded model
        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error('Error loading model', error);
      }
    );

    // Render scene
    this.renderScene();
  }

  private renderScene(): void {
    this.ngZone.runOutsideAngular(() => {
      const animate = () => {
        requestAnimationFrame(animate);

        if (this.model) {
          const rotationSpeed = 0.005; // Adjust rotation speed

          this.model.rotation.y += rotationSpeed; // Rotate the loaded model
        }

        this.renderer.render(this.scene, this.camera);
      };
      animate();
    });
  }

  @ViewChild('rendererContainer', { static: true })
  set rendererContainerRef(value: ElementRef) {
    if (value) {
      this.rendererContainer = value;
    }
  }
}
