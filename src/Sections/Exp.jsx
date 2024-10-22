import { OrbitControls } from '@react-three/drei';
import Avatar from '../Components/Avatar';

const Exp = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <Avatar rotation={[0, Math.PI, 0]} /> {/* This sets initial rotation to face camera */}
      </group>
      <ambientLight intensity={3.5} />
    </>
  );
};

export default Exp;