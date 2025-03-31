import treatments from '@/app/data/treatments.json';

// Recursive function to extract all keys from a JSON object
function extractKeys(obj, keysSet = new Set()) {
    if (typeof obj === 'object' && obj !== null) {
        for (const key in obj) {
            keysSet.add(key);
            extractKeys(obj[key], keysSet);
        }
    }
    return keysSet;
}

export default function Page() {
    // Extract all keys from the JSON object
    const allKeys = Array.from(extractKeys(treatments));

    console.log(allKeys);
    return (
        <div className='w-[500px] h-[500px] bg-customGold text-white'>
            <h2>Ključevi u JSON fajlu:</h2>
            <ul>
                {allKeys.map((key, index) => (
                    <li key={index}>{key}</li>
                ))}
            </ul>
        </div>
    );
}