
import * as THREE from 'three';
import { useEffect, useState } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js'

import image2 from '../img/saturn.jpg';
import nebula from '../img/Floor.jpg';
import starts from '../img/stars.jpg';
import floor from '../img/top2.jpg';
import room from '../img/room.jpg';
import windows from '../img/window.png';
import axios from 'axios';

//CSS//
// import '../../src/App.css';

function Room() {

 // Fetching The First Wall Collection   
  const [CollectionData1, setCollectionData1] = useState([]);

  const getCollectionData1 = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Products1");
      setCollectionData1(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollectionData1();
  }, []);


  let img = undefined;

  {
    CollectionData1 &&
    CollectionData1.map((cd) => (

      img = require(`../uploads/${cd.collectionsImg}`).default


    ))
  } 

 // Fetching The Second Wall Collection   
 const [CollectionData2, setCollectionData2] = useState([]);

 const getCollectionData2 = async () => {
   try {
     const resp = await axios.get("http://localhost:5000/Fetch-Products2");
     setCollectionData2(resp.data);
   } catch (error) {
     console.log(error);
   }
 };

 useEffect(() => {
  getCollectionData2();
 }, []);


 let img2 = undefined;

 {
   CollectionData2 &&
   CollectionData2.map((cd) => (

     img2 = require(`../uploads/${cd.collectionsImg}`).default

   ))
 }




 // Fetching The Third Wall Collection   
 const [CollectionData3, setCollectionData3] = useState([]);

 const getCollectionData3 = async () => {
   try {
     const resp = await axios.get("http://localhost:5000/Fetch-Products3");
     setCollectionData3(resp.data);
   } catch (error) {
     console.log(error);
   }
 };

 useEffect(() => {
  getCollectionData3();
 }, []);


 let img3 = undefined;

 {
   CollectionData3 &&
   CollectionData3.map((cd) => (

     img3 = require(`../uploads/${cd.collectionsImg}`).default

   ))
 }





  // Fetching The Fourth Wall Collection   
  const [CollectionData4, setCollectionData4] = useState([]);

  const getCollectionData4 = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/Fetch-Products4");
      setCollectionData4(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
   getCollectionData4();
  }, []);
 
 
  let img4 = undefined;
 
  {
    CollectionData4 &&
    CollectionData4.map((cd) => (
 
      img4 = require(`../uploads/${cd.collectionsImg}`).default
 
    ))
  }



  useEffect(() => {
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();


    // Controls
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    scene.add(camera); // add the camera to the scene
    camera.position.y = 5; // move camera back 5 units
    camera.position.z = 5; // move camera back 5 units
    camera.position.x = 0; // move camera back 5 units
    // camera.rotation.x = Math.PI / 360;
    // camera.rotation.y = Math.PI / 360;
    // camera.lookAt(10,10,0);
    // camera.position.y = 5;
    // camera.position.z = 4;
    camera.position.set(-1067.29, 30.23, 40.82);
    // Create a render and set the size and background color


    const canvas = document.querySelector('#mycanvas'); // Canvas id //

    const renderer = new THREE.WebGLRenderer({ 
      canvas, alpha: true
     }); // antialias means smooth edges
    renderer.setSize(window.innerWidth, window.innerHeight); // set size of renderer
    renderer.setClearColor(0xbbbbb, 1); //background color
    document.body.appendChild(renderer.domElement); // add renderer to html



    //   function random(min, max) {
    //     return min + Math.random() * (max - min);
    // }


    // window //
    // 1 //
    const wingeometry = new THREE.PlaneGeometry(5, 3.5);
    const winmaterial = new THREE.MeshBasicMaterial({
      //color: 0x000, 
      side: THREE.DoubleSide,
      map: textureLoader.load(windows)
    });
    const winplane = new THREE.Mesh(wingeometry, winmaterial);
    scene.add(winplane);
    winplane.position.setFromCylindricalCoords(-18, 3.6, 2.2);
    winplane.position.x = -12;
    //winplane.position.y = -1;
    //winplane.position.x = 10;

    // 2 //
    // const wingeometry2 = new THREE.PlaneGeometry( 4, 3 );
    // const winmaterial2 = new THREE.MeshBasicMaterial( {
    //  // color: 0x1b1c26, 
    //   side: THREE.DoubleSide,
    //   map: textureLoader.load(windows)
    // } );
    // const winplane2 = new THREE.Mesh( wingeometry2, winmaterial2 );
    // scene.add( winplane2 );
    // winplane2.position.setFromCylindricalCoords(13, 4.7, 2);
    // winplane2.rotation.y = 20;
    // winplane2.position.x = -12;
    //winplane2.rotation.x= -16;
    //winplane.position.y = -1;
    //winplane.position.x = 10;

    // window  3//
    // const wingeometry3 = new THREE.PlaneGeometry( 4, 3.5);
    // const winmaterial3 = new THREE.MeshBasicMaterial( {
    // //  color: 0x1b1c26, 
    //   side: THREE.DoubleSide,
    //   map: textureLoader.load(windows)
    // } );
    // const winplane3 = new THREE.Mesh( wingeometry3, winmaterial3 );
    // scene.add( winplane3 );
    // winplane3.position.setFromCylindricalCoords(15, 5, 2);
    //winplane3.rotation.y = 10;
    //winplane3.position.x = 12;
    //winplane3.rotation.x= -16;
    //winplane3.position.y = 2;
    //winplane.position.x = 10;

    // sofa //
    // const  sofageometry = new THREE.BoxGeometry( 4, 3.5);
    // const sofamaterial = new THREE.MeshLambertMaterial( {
    //   //color: 0xFFFFFF,
    //   //side: THREE.DoubleSide,
    //   map: textureLoader.load(sofa)
    // } );

    // const  sofaplane = new THREE.Mesh( sofageometry, sofamaterial );
    // scene.add( sofaplane );
    // sofaplane.position.setFromCylindricalCoords(10, 9, 1);
    // //sofaplane.rotation.y = 10;
    // sofaplane.position.x = 0;
    // sofaplane.position.y =  -0.5;



    //  var carTextureLoaders = new textureLoader.load(sofa);
    //  car = new THREE.Mesh(
    //   new THREE.BoxGeometry(200,100,5),
    //   new THREE.MeshLambertMaterial(
    //    { map:carTextureLoaders,

    //    })

    //  );
    // scene.add(car)

    //Door 1 //


    //   const doorgeometry = new THREE.PlaneGeometry( 6, 7 );
    //   const doormaterial = new THREE.MeshBasicMaterial( {
    //   //  color: 0x1b1c26, 
    //     side: THREE.DoubleSide,
    //     map: textureLoader.load(door)
    //   } );
    //   const doorplane = new THREE.Mesh( doorgeometry, doormaterial );
    //   scene.add( doorplane );
    //   doorplane.position.setFromCylindricalCoords(10, 3.5, 2);
    //   doorplane.rotation.y = 30;
    //   doorplane.position.x = 19;
    //  // doorplane.rotation.x=0.02;
    //   //winplane.position.y = -1;
    //   //winplane.position.x = 10;

    // new wall //
    const newfrontWallGeometry = new  THREE.BoxGeometry(20,10,0.5);
    const newfrontWallMaterial = new  THREE.MeshBasicMaterial({
      color: "grey",
      map: textureLoader.load(image2)
    });
    const  newfrontWall = new THREE.Mesh( newfrontWallGeometry, newfrontWallMaterial );
    newfrontWall.position.setFromCylindricalCoords(10, 1, 2);
    scene.add(newfrontWall);
    newfrontWall.position.x = -13;
    //newfrontWall.position.y = 20;
    newfrontWall.rotation.x= 0;




    //new wall 2 //


    const newfrontWallGeometry2 = new  THREE.BoxGeometry(15,10,0.5);
    const newfrontWallMaterial2 = new  THREE.MeshBasicMaterial({
     color: "grey",
     map: textureLoader.load(image2)
    });
    const  newfrontWall2 = new THREE.Mesh( newfrontWallGeometry2, newfrontWallMaterial2 );
    newfrontWall2.position.setFromCylindricalCoords(10, 1, 2);
    scene.add(newfrontWall2);
    newfrontWall2.position.x = 13;
    newfrontWall.position.y = 20;
    newfrontWall2.rotation.x= 0;

    // new wall images //

    const newwallimggeometry = new THREE.PlaneGeometry( 5, 4 );
    const newwallimgmaterial = new THREE.MeshBasicMaterial( {
      //color: 0xffff00, 
      map: textureLoader.load(starts),
      side: THREE.DoubleSide,
    } );
    const  newwallimgplane = new THREE.Mesh( newwallimggeometry, newwallimgmaterial );
    scene.add( newwallimgplane )
    newwallimgplane.position.x = 20;
    newwallimgplane.position.setFromCylindricalCoords(18, 5, 0);
    newwallimgplane.rotation.x= 0;

    newwallimgplane.position.x = -10;
    newwallimgplane.position.y = 2;


    // Wall  img 1 //


    let creactgroup = (name, x, y, z, a, b, c) => {
      const geometry2 = new THREE.BoxGeometry(5, 3, 0.09);

      const material2 = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(img)
      });
      const plane = new THREE.Mesh(geometry2, material2);
      plane.position.setFromCylindricalCoords(x, y, z);
      // plane.position.x= -6;
      // plane.position.y= 0.5;
      plane.position.set(a, b, c)
      plane.name = name;

      return plane;
    }


    const group = new THREE.Group();

    let supermash1 = creactgroup('supermash1');
    supermash1.position.setFromCylindricalCoords(-15, 3, 2);
    supermash1.position.x = 17;
    group.add(supermash1);


    const supermash2 = creactgroup('supermash2');
    supermash2.position.setFromCylindricalCoords(-15, -3, 2);
    supermash1.position.x = 8;
    group.add(supermash2);



    const supermash3 = creactgroup('supermash3');
    supermash3.position.setFromCylindricalCoords(-15, 3, 2);
    supermash3.position.x = -4;
    group.add(supermash3);




    // Wall img  2 //


    let creactgroup2 = (name, x, y, z, a, b, c) => {
      const geometry2 = new THREE.BoxGeometry(5, 3, 0.09);

      const material2 = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(img2)
      });
      const plane = new THREE.Mesh(geometry2, material2);
      plane.position.setFromCylindricalCoords(x, y, z);
      // plane.position.x= -6;
      // plane.position.y= 0.5;
      plane.position.set(a, b, c)
      plane.name = name;

      return plane;
    }




    const supermashWall1 = creactgroup2('supermashwall1');
    supermashWall1.position.setFromCylindricalCoords(15, 3, 2.6);
    supermashWall1.position.x = 9;
    group.add(supermashWall1);

    const supermashWall2 = creactgroup2('supermashwall2');
    supermashWall2.position.setFromCylindricalCoords(15, 3, 2.6);
    supermashWall2.position.x = 0;
    group.add(supermashWall2);


    const supermashWall3 = creactgroup2('supermashwall3');
    supermashWall3.position.setFromCylindricalCoords(15, 3, 2.6);
    supermashWall3.position.x = -9;
    group.add(supermashWall3);





    //Wall img  3 //


    let creactgroup3 = (name, x, y, z, a, b, c) => {
      const geometry3 = new THREE.BoxGeometry(5, 3, 0.09);

      const material3 = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(img3)
      });
      const plane = new THREE.Mesh(geometry3, material3);
      plane.position.setFromCylindricalCoords(x, y, z);
      // plane.position.x= -6;
      // plane.position.y= 0.5;
      plane.position.set(a, b, c)
      plane.name = name;

      return plane;
    }


    const supermashWallLeft2 = creactgroup3('supermashWallLeft2');
    supermashWallLeft2.position.setFromCylindricalCoords(10, 4, 2);
    supermashWallLeft2.position.x = 13;

    supermashWallLeft2.rotation.y = 30;
    group.add(supermashWallLeft2);




    const supermashWallLeft3 = creactgroup3('supermashWallLeft2');
    supermashWallLeft3.position.setFromCylindricalCoords(10, 4.9, 2);
    supermashWallLeft3.position.x = 15;
    //supermashWallLeft3.position.y=10;
    supermashWallLeft3.rotation.y = 30;
    group.add(supermashWallLeft3);


    const supermashWallLeft1 = creactgroup3('supermashWallLeft1');
    supermashWallLeft1.position.setFromCylindricalCoords(-10, 3, 2);
    supermashWallLeft1.position.x = 15;
    supermashWallLeft1.rotation.y = 30;
    group.add(supermashWallLeft1);


    //Wall img  4 //


    let creactgroup6 = (name, x, y, z, a, b, c) => {
      const geometry5 = new THREE.BoxGeometry(5, 3, 0.09);

      const material5 = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: new THREE.TextureLoader().load(img4)
      });
      const plane = new THREE.Mesh(geometry5, material5);
      plane.position.setFromCylindricalCoords(x, y, z);
      // plane.position.x= -6;
      // plane.position.y= 0.5;
      plane.position.set(a, b, c)
      plane.name = name;

      return plane;
    }




    const supermashWallLeft11 = creactgroup6('supermashWallLeft11');
    supermashWallLeft11.position.setFromCylindricalCoords(-8, 3, 2);
    supermashWallLeft11.position.x = -13;

    supermashWallLeft11.rotation.y = 36;
    //supermashWallLeft11.rotation.z = -3;
    group.add(supermashWallLeft11);


    const supermashWallLeft12 = creactgroup6('supermashWallLeft12');
    supermashWallLeft12.position.setFromCylindricalCoords(-1, 2, 2);
    supermashWallLeft12.position.x = -13;

    supermashWallLeft12.rotation.y = 30;
    group.add(supermashWallLeft12);



    const supermashWallLeft15 = creactgroup6('supermashWallLeft15');
    supermashWallLeft15.position.setFromCylindricalCoords(10, 4, 2);
    supermashWallLeft15.position.x = -13;

    supermashWallLeft15.rotation.y = 36;
    group.add(supermashWallLeft15);

    scene.add(group);












    // Texture of the floor
    const floorTexture = new THREE.TextureLoader().load(floor); // ImageUtils is deprecated in the newer versions of THREE.js
    floorTexture.wrapS = THREE.RepeatWrapping; // wrapS is horizonatl direction
    floorTexture.wrapT = THREE.RepeatWrapping; // wrapT the vertical direction
    floorTexture.repeat.set(1, 1); // how many times to repeat the texture

    // let floorTexture = new THREE.TextureLoader().load('img/Floor.jpg');
    // textureLoader.load('img/Floor.jpg');cds

    // Create the floor plane.
    const planeGeometry = new THREE.PlaneBufferGeometry(45, 45); // BoxGeometry is the shape of the object
    const planeMaterial = new THREE.MeshBasicMaterial({ // MeshBasicMaterial is the look of the object (color or texture)
      map: floorTexture, // the texture
      side: THREE.DoubleSide,
    });

    const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial); // create the floor with geometry and material

    floorPlane.rotation.x = Math.PI / 2; // this is 90 degrees
    floorPlane.position.y = -Math.PI; // this is -180 degrees

    scene.add(floorPlane); // add the floor to the scene


    // Create the walls
    let wallGroup = new THREE.Group(); // create a group to hold the walls
    scene.add(wallGroup); // add the group to the scene, then any child added to the group will display to the scene too


    // Front Wall //
    const frontWallGeometry = new THREE.BoxGeometry(50, 20, 0.001);
    const frontWallMaterial = new THREE.MeshBasicMaterial({
      // color: "grey",
      map: textureLoader.load(image2)
    });
    const frontWall = new THREE.Mesh(frontWallGeometry, frontWallMaterial);
    scene.add(frontWall);
    frontWall.position.z = -20;


    //back Wall//
    const backWallGeometry = new THREE.BoxGeometry(50, 30, 0.001);
    const backWallMaterial = new THREE.MeshBasicMaterial({
      //color: "grey",
      map: textureLoader.load(image2)
    });
    const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
    scene.add(backWall);
    backWall.position.z = 20;


    // Left Wall
    const leftWallGeometry = new THREE.BoxGeometry(50, 30, 0.001);
    const leftWallMaterial = new THREE.MeshBasicMaterial({
      // color: 'lightgrey',
      map: textureLoader.load(image2)
    });
    const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
    scene.add(leftWall);
    leftWall.rotation.y = Math.PI / 2; // this is 90 degrees
    leftWall.position.x = -20; // -20 is for 20 units left
    leftWall.rotation.y = Math.PI / 2; // this is 90 degrees
    leftWall.position.x = -20; // -20 is for 20 units left


    // Right Wall
    const rightWallGeometry = new THREE.BoxGeometry(50, 30, 0.001);
    const rightWallMaterial = new THREE.MeshBasicMaterial({
      //color: 'lightgrey',
      map: textureLoader.load(image2)
    });
    const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
    scene.add(rightWall);
    rightWall.position.x = 20;
    rightWall.rotation.y = Math.PI / 2; // this is 90 degrees

    wallGroup.add(frontWall, leftWall, rightWall);

    // Loop through each wall and create the bounding box
    for (let i = 0; i < wallGroup.children.length; i++) {
      wallGroup.children[i].Box = new THREE.Box3();
      wallGroup.children[i].Box.setFromObject(wallGroup.children[i]);
    }


    // Create the ceiling
    const ceilingGeometry = new THREE.PlaneBufferGeometry(1000, 90); // BoxGeometry is the shape the object
    const ceilingMaterial = new THREE.MeshBasicMaterial({ // Lambert material is for non-shiny surfaces 
      //color: 'lavagrey',
      map: textureLoader.load(nebula)
    });
    const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial); // create ceiling with geometry and material

    ceilingPlane.rotation.x = Math.PI / 2; // this is 90 degrees
    ceilingPlane.position.y = 8;

    scene.add(ceilingPlane);


    // renderer.setClearColor(0xFFEA00);
    //  const  textureLoader = new THREE.TextureLoader();

    //scene.background = textureLoader.load(stars, );
    // const cubeTextureLoader = new THREE.CubeTextureLoader();

    // scene.background = cubeTextureLoader.load([
    //   starsTexture,
    //   starsTexture,
    //   starsTexture ,
    //   starsTexture,
    //   starsTexture,
    //   starsTexture,

    //   ]);


    const fpcontrols = new FirstPersonControls(camera, document.body);
    fpcontrols.movementSpeed = 150;
    fpcontrols.lookSpeed = 0.1;









    const controls = new OrbitControls(camera, renderer.domElement);


    //controls.enablePan = false;
    //controls.enableDamping = true;
    //controls.rotateSpeed = - 0.25
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.maxZoom = 600;
    controls.zoomSpeed = 2;
    //controls.panSpeed = 2;
    controls.rotateSpeed = 2;
    //controls.autoRotate = true;
    //controls.enableDamping = true;
    //controls.screenSpacePanning =false;
    // controls.keys = {
    //   LEFT: 'ArrowLeft',
    //   UP : 'ArrowUp',
    //   RIGHT: 'ArrowRight',
    //   BOTTOM : 'ArrowDown'
    // }
    controls.listenToKeyEvents(window)




    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 6;



    // 


    // Movement //
    // let position = 0;
    // window.addEventListener('mouseup', function() {
    //   switch(position) {
    //       case 0:
    //           moveCamera(-1.8, -1.6, -10);
    //           rotateCamera(10, 10, 10);
    //           position = 1;
    //           camera.zoom = 2;
    //           break;

    //           case 1:
    //             moveCamera(1, 1, -10);
    //             rotateCamera(15, 15, 15);
    //             position = 2;
    //             camera.zoom = 4;
    //             break;

    //   }


    // })
    //   function moveCamera(x, y, z) {
    //         gsap.to(camera.position, {
    //             x,
    //             y,
    //             z,
    //             duration: 3
    //         });
    //     }

    //     function rotateCamera(x, y, z) {
    //         gsap.to(camera.rotation, {
    //             x,
    //             y,
    //             z,
    //             duration: 3.2
    //         });
    //     }  



    // Event Listenet for when we press the keys
    document.addEventListener('keydown', onKeyDown, false);
    // // function when a key is pressed, execute this function
    function onKeyDown(event) {
      let keycode = event.which;

      // right arrow key
      if (keycode === 39) 
      {
        camera.translateY(-0.05);
      }
      // left arrow key
      else if (keycode === 37) {
        camera.translateY(0.05);
      }


      // up arrow key
      else if (keycode === 38) {
        camera.translateZ(0);
      }
      // down arrow key
      else if (keycode === 40) {
        camera.translateZ(0);
      }
    }






    function animate() {

      requestAnimationFrame(animate);




      controls.update();
      renderer.render(scene, camera);

    };

    animate();
  })
  return (

 

 

    <div>
     <canvas id="mycanvas"></canvas>
      <style jsx>{`

          body{
            display: block;
            overflow: hidden;
          }

          
        `}</style>
    </div>

  );
}

export default Room;
