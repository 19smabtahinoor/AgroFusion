// Import netcdfjs in Node.js
import NetCDFReader from "netcdfjs";

// Or use the <script> tag in HTML if in a browser environment
// <script src="https://unpkg.com/netcdfjs@latest/dist/netcdfjs.min.js"></script>

interface NetCDFVariable {
    name: string;
    dimensions: string[];
    attributes: Record<string, any>;
    type: string;
    size: number;
    offset: number;
}

interface NetCDFAttributes {
    [key: string]: any;
}

async function loadNetCDF(url: string): Promise<void> {
    try {
        // Fetch the NetCDF file from the URL
        const response: Response = await fetch(url);
        const arrayBuffer: ArrayBuffer = await response.arrayBuffer();

        // Create a NetCDFReader instance with the file data
        const reader: NetCDFReader = new NetCDFReader(arrayBuffer);

        // Get variables available in the file
        const variables: NetCDFVariable[] = reader.variables;
        console.log("Available variables:", variables);

        // Read a specific variable (replace 'humidity_variable_name' with the actual name in the file)
        const humidityData: any = reader.getDataVariable("humidity_variable_name");
        console.log("Humidity Data:", humidityData);
        
        // Access attributes and other metadata if needed
        const attributes: NetCDFAttributes = reader.attributes;
        console.log("Global Attributes:", attributes);

    } catch (error: unknown) {
        console.error("Error loading NetCDF file:", error);
    }
}

// Example usage
loadNetCDF("path/to/your-file.nc");
