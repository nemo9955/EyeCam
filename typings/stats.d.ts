/**
*	created by Mogoi Adrian
*
*	19.04.2016  
*/





declare class Stats {
    constructor();
    dom: any;
    /**
     * 0: fps
     * 
     * 1: ms
     * 
     * 2: mb
     * 
     * 3+: custom
     * 
     * */
    showPanel(panel: number): void;
    begin(): void;
    end(): void;
}