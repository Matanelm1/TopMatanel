import Link from 'next/link';

export default function Footer() {
    return (
        <div id="footer" className="bg-gray-800 text-white p-4 flex justify-end gap-x-10 mt-auto">
            <Link href='/contact'>
                <div className="flex flex-col items-center">
                    <span className="mb-2">icon</span>
                    <span>צור קשר</span>
                </div>
            </Link>
            <div className="flex flex-col items-center">
                <span className="mb-2">icon</span>
                <span>נגישות</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="mb-2">icon</span>
                <span>פרטיות</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="mb-2">icon</span>
                <span>מפת אתר</span>
            </div>
        </div>
    );
}
