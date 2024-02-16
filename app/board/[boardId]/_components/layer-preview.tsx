"use client";

import { memo } from "react";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@/liveblocks.config";

import { Text } from "./text";
import { Ellipse } from "./ellipse";
import { Rectangle } from "./rectangle";
import { Note } from "./note";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }

    switch (layer.type) {
      // LayerType => Path
      case LayerType.Path:
        return (
          <Path
            key={id}
            x={layer.x}
            y={layer.y}
            points={layer.points}
            stroke={selectionColor}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
          />
        );

      // LayerType => Note
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      // LayerType => Text
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      // LayerType => Ellipse
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      // LayerType => Rectangle
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      default:
        console.log("Unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
