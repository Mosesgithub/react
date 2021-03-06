/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

type WebpackMap = {
  [filename: string]: ModuleMetaData,
};

export type BundlerConfig = WebpackMap;

export type ModuleReference = string;

export type ModuleMetaData = {
  id: string,
  chunks: Array<string>,
};

export function resolveModuleMetaData(
  config: BundlerConfig,
  modulePath: ModuleReference,
): ModuleMetaData {
  return config[modulePath];
}
