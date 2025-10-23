export class GeneratedColors {
    private static instance: GeneratedColors;
    colors: string[];
    private constructor() {
        this.colors = ['012345','6789AB','CDEF01','234567','89ABCD']
    }
    public static getInstance(): GeneratedColors {
        if(this.instance == null){
            this.instance = new GeneratedColors();
            return this.instance;
        }
        return this.instance;
    }
    public getColors(): string[]{
        return this.colors;
    }
}  