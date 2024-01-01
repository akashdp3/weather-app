import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex flex-direction justify-between">
      <p className="text-xl font-semibold align-middle my-auto">Weatheria</p>
      <div className="flex gap-1 justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="text-lg font-regular align-middle my-auto">
            Delhi, India
          </p>
        </div>
        <Button className="border-none" variant="outline" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        </Button>
      </div>
      {/* <div>
        <Input placeholder="Search for any city" />
      </div> */}
    </div>
  );
};

export default Navbar;
