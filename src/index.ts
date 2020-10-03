#!/usr/bin/env node
import { handler } from "./services/Handler";
import { parser } from "./services/Parser";
import './util/replaceAt';

handler.runCommand();
