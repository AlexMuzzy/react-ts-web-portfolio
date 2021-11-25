import React, { useRef, useEffect, RefObject, CSSProperties } from "react";

type canvasProps = {
  height: string;
  width: string;
};

const canvasStyling: CSSProperties = {
  position: "absolute"
}

class particle {
  xCoordinate: number;
  yCoordinate: number;
  currentDirection: number;

  
  // Particle direction enum
  particleDirection = [0, 1, 2, 3]
  
  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.currentDirection = this.getRandomDirection();

  }

  getRandomDirection = () => {
    return this.particleDirection[Math.floor(Math.random() * this.particleDirection.length)];
  }

}

class ParticleFactory {
  height: number;
  width: number;
  context: CanvasRenderingContext2D;
  particleNumber: number;
  particleRadius: number;
  framesPerSecond: number;
  oldTimeStamp: number;


  constructor({height, width}: canvasProps, 
              context: CanvasRenderingContext2D,
              particleNumber: number,
              particleRadius: number) {

    this.height = parseInt(height);
    this.width = parseInt(width);
    this.context = context;
    this.particleNumber = particleNumber;
    this.particleRadius = particleRadius;
    this.framesPerSecond = 60;
    this.oldTimeStamp = 0;
  }

  generateParticles = () => {

  }

  update = () => {
    if (this.oldTimeStamp <= new Date().getTime() + this.getFrameDelta()){
      window.requestAnimationFrame(this.render);
    }
  }

  getFrameDelta = () => {
    return 1000 / this.framesPerSecond;
  }

  render = () => {

    this.context.clearRect(0, 0, this.width, this.height);
    this.context.beginPath();

    for (let particle = 0; particle < this.particleNumber; particle++){
      let x = this.getRandomXCoordinate();
      let y = this.getRandomYCoordinate();

      this.context.moveTo(x + this.particleRadius, y);
      this.context.arc(
        x,
        y,
        this.particleRadius,
        0,
        2 * Math.PI // 2 radians
      );
    }

    this.context.closePath();
    this.context.fill();

    this.update();
  }
  
  getRandomXCoordinate = () => Math.round(Math.random() * this.width);
  getRandomYCoordinate = () => Math.round(Math.random() * this.height);
}

const CanvasBackground = ({ height, width }: canvasProps) => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context: CanvasRenderingContext2D | null | undefined =
      canvasRef.current?.getContext("2d");

    if (context) {
      let particles = new ParticleFactory(
        {height, width},
        context,
        50,
        2)

        window.requestAnimationFrame(particles.update);

        particles.update();

      } else {
      throw new Error("Could not retrieve context.");
    }
  }, []);

  return <canvas ref={canvasRef} height={height} width={width} style={canvasStyling}/>;
};

export default CanvasBackground;
