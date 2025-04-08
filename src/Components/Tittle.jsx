export default function Tittle() {
    return (
        <div className="w-full max-w-2xl bg-gradient-to-br from-[#1a2e1a] to-[#0f1a0f] p-4 rounded-2xl shadow-xl border border-[#2d4a2d]/50 backdrop-blur-sm mb-2">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#d1e7dd] to-[#a8d5b9] bg-clip-text text-transparent">
                    LifeLeap 2
                </h1>
                <div className="text-xs text-[#d1e7dd]/80">
                    <p className="font-medium">Population Dynamics</p>
                    <p className="text-[#d1e7dd]/60">v2.0</p>
                </div>
            </div>
            <div className="mt-1 h-px bg-gradient-to-r from-transparent via-[#2d4a2d]/50 to-transparent" />
        </div>
    );
}
