import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useSwal from "../hook/useSwal";
import useAxisosSecure from "../hook/useAxisosSecure";

const Register = () => {
  const axiosSecure = useAxisosSecure();
  const navigate = useNavigate();
  const { success, error } = useSwal();
  const { createUser, googleSignIn, setUser } = useAuth();
  const hangleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        navigate("/");

        success("Welcome!");
      })
      .catch((err) => {
        error(err.message);
      });
  };
  const HandleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.Name.value;
    const photo = e.target.photo.value;
    const email = e.target.Email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      error(
        "Password must have 1 uppercase, 1 lowercase & minimum 6 characters"
      );
      return;
    }
    await createUser(email, password, name, photo)
      .then((newUser) => {
        const UserInfo = { name, photo, email, password };
        axiosSecure.post("/users", UserInfo).then((newOne) => {
          console.log(newOne);
          setUser(newUser);
          navigate("/");
          success("Welcome!", "Account created successfully");
          e.target.reset();
        });
      })
      .catch((err) => {
        error(err.message);
      });
  };
  return (
    <div>
      <div className="max-w-sm mx-auto bg-amber-50 shadow-2xl p-5 my-3 rounded-2xl">
        <form onSubmit={HandleRegister}>
          <h2 className="3xl font-semibold  border-b border-gray-300 text-success">
            {" "}
            Register Now
          </h2>

          <div class="mb-5">
            <label class="block mb-2.5 text-sm font-medium text-heading">
              Your Name
            </label>
            <input
              name="Name"
              type="text"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
              placeholder="Full Name"
              required
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2.5 text-sm font-medium text-heading">
              photoURL
            </label>
            <input
              name="photo"
              type="text"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
              placeholder="photoURL"
              required
            />
          </div>
          <div class="mb-5">
            <label class="block mb-2.5 text-sm font-medium text-heading">
              Your email
            </label>
            <input
              name="Email"
              type="email"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password-alternative"
              class="block mb-2.5 text-sm font-medium text-heading"
            >
              Your password
            </label>
            <input
              name="password"
              type="password"
              id="password-alternative"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            class="box-border w-full btn btn-outline text-[16px] font-semibold btn-success hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs  leading-5 rounded-base  px-4 py-2.5 focus:outline-none"
          >
            Submit
          </button>
          <p className="flex justify-center">
            {" "}
            <span className="text-center">------ or ------</span>
          </p>
        </form>
        <button
          onClick={hangleGoogleSignUp}
          className="btn bg-white w-full text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className=" mt-2 text-[14px]">
          Already have an account?
          <Link className="text-blue-400" to="/register">
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
