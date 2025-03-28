import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { MolViewer } from 'molstar';

export default function MolecularModel() {
  const modelRef = useRef();

  useEffect(() => {
    const viewer = new MolViewer(modelRef.current, {
      layoutIsExpanded: true,
      layoutShowControls: true,
    });

    viewer.loadPdb('https://files.rcsb.org/download/1BNA.pdb').then(() => {
      viewer.render();
    });

    return () => {
      viewer.dispose();
    };
  }, []);

  return <div ref={modelRef} style={{ width: '100%', height: '500px' }} />;
}
