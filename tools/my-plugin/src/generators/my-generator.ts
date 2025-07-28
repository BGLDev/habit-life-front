import {
  Tree,
  formatFiles,
  generateFiles,
} from '@nx/devkit';
import { libraryGenerator } from '@nx/angular/generators'; // Asegúrate que esté instalado
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  // Ejecuta el generador de librería Angular con los parámetros necesarios
  await libraryGenerator(tree, {
    name: options.name,
    directory: options.name, // <-- Esta es la propiedad requerida
    standalone: false,
    changeDetection: 'Default',
    style: 'scss',
  });

  const projectRoot = `libs/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  await formatFiles(tree);
}

export default myGeneratorGenerator;
