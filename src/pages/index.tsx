export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <div>
          <div>
            <div>
              <div>
                <div className="fixed bg-black w-96 h-96 z-[1000]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-red-500 w-96 h-96 z-[2000]"></div>
        <div className="bg-purple-500 w-96 h-96"></div>
        <div className="bg-blue-500 w-96 h-96"></div>
      </div>
    </>
  );
}
