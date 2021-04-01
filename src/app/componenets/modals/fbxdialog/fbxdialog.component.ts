import { Component, OnInit,Inject,AfterViewInit,Renderer2,ViewChild  } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router,ActivatedRoute } from '@angular/router';

//three js libs
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//var OrbitControls = require('three-orbit-controls')(THREE);

var loader = new FBXLoader();
//import {OrbitControls} from 'three-orbit-controls';
import Scene = THREE.Scene;
import Mesh = THREE.Mesh;
import PerspectiveCamera = THREE.PerspectiveCamera;
import WebGLRenderer = THREE.WebGLRenderer;
//import TrackballControls = THREE.TrackballControls;

export interface DialogData {
  number: Number;
}
@Component({
  selector: 'app-fbxdialog',
  templateUrl: './fbxdialog.component.html',
  styleUrls: ['./fbxdialog.component.css']
})
export class FbxdialogComponent implements AfterViewInit,OnInit {
  public selected:any;
   places: any = [];
   @ViewChild("myplaces") myCanvas: any;
   private path:any;
   private scene: any;
   private camera: any;
   private renderer: any;
   private controls: any;
   public sub :any;
   public id :any;
  constructor(private httpClient: HttpClient,private render: Renderer2,private _Activatedroute:ActivatedRoute,
    private _router:Router) { }
  ngAfterViewInit() {
    this.init3D();
  }
  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
      this.selected = params.get('id'); 
          
   });
    let temp:any;
    //this.selected=this.data.number;
    console.log(this.selected);
    this.httpClient.get("assets/data.json").subscribe(data =>{
     console.log(data);
     temp= data;
     this.places = temp[this.selected-1];
     //add listener for the resize of the window - will resize the renderer to fit the window
     let global = this.render.listen('window', 'resize', (evt) => {
      this.onWindowResize();
    })
  })
 }
 init3D(){
  // renderer
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.myCanvas.nativeElement.appendChild(this.renderer.domElement);

  // scene
  this.scene = new THREE.Scene();
  this.scene.background = new THREE.Color( 0xFFFFFF );

  // camera
  this.camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.01, 10000 );
  this.camera.position.set( 0, 70, 200 );
  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.scene.add( new THREE.AmbientLight( 0x222222 ) );
  this.scene.add( this.camera ); // required, because we are adding a light as a child of the camera

  // controls
  
  this.controls = new OrbitControls(this.camera,this.renderer.domElement);
  
  // lights
  var light = new THREE.PointLight( 0xffffff, 0.8 );
  this.camera.add( light );

  loader.load("./assets/fbx/Rotonda/ROTUNDA.fbx", (geometry) => {
    var material = new THREE.MeshPhongMaterial( { color: 0xBEBEBE } );
    geometry.scale.multiplyScalar(0.01); 
   
    //geometry.center( ); // this re-sets the mesh position
    var axisHelper = new THREE.AxesHelper(100);
    this.scene.add(axisHelper);
    geometry.setRotationFromAxisAngle(new THREE.Vector3(geometry.position.x,geometry.position.y,geometry.position.z),90);
    geometry.setRotationFromEuler(new THREE.Euler(geometry.position.x-89.5399,0,geometry.position.z,'ZYX'));
    geometry.position.multiplyScalar( - 1 );
   // var mesh = new THREE.Mesh( geometry, material );
    this.scene.add(geometry)
  })

  //request animation
  this.animate();
 
  this.controls.update();
}
 /**
   * render the scene and request the window animation frame
   */
  animate() {

    this.camera.lookAt( this.scene.position );

    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(_ => this.animate());

  }

  /**
   * will resize the renderer and the camera to the right size of the window
   */
  onWindowResize() {

    this.camera.aspect = window.innerWidth / window.innerHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );

  }
  changeCameraPosition(flag:Boolean){
    if(flag){
      this.camera.position.set( 0, 70, 200 );
    }else{
      this.camera.position.set( 0, 50, 0 );
    }
  }

}
