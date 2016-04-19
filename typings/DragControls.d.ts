/**
*	created by Mogoi Adrian
*
*	19.04.2016
*/




/// <reference path="./three.d.ts" />

declare namespace THREE {
    class DragControls {

        constructor(camera: THREE.Camera, scene: THREE.Scene, stuff: any)

        enabled: boolean;
        activate(): void;
        deactivate(): void;

        setObjects(object: THREE.Object3D[]): void;
        on(event: string, handler: (event: any) => void): DragControls;
        off(event: string, handler: (event: any) => void): DragControls;

        notify(event: string, data: any, member: any): DragControls;


    }
}