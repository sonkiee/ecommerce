import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useCallback, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

const { width } = Dimensions.get("window");

type ImageItem = { id: string; uri: string };
type Variant = { id: string; type: string; values: string[] };

export default function EditProductScreen() {
  // product fields
  const [name, setName] = useState("Vintage Denim Jacket");
  const [description, setDescription] = useState(
    "Classic denim jacket with a worn-in feel. Perfect for a casual look."
  );
  const [price, setPrice] = useState("75.50");
  const [category, setCategory] = useState("Jackets");

  // images
  const [images, setImages] = useState<ImageItem[]>([
    {
      id: String(Date.now()),
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB29GsfUfNn5Vr83p4uFDceDrCnM2E0AaDeQd9W_mgfwZVHof1n1zT9RUhGZM4JyvGB0rb2fv5dhSpIg79g2lcSka6y7e3UWxa3ZrwS4Sq6cTh9p7ThdOafhEjfm8JU6AnxDcQZJnBMoI-f5lfRHWGt7f5CBU74B1aNsApph-6zo2P0xQ3rGZPnYY0ZB-ql1-2smENU1XNMWr0ST9tRaED-FUrzxiOog059M-l1cV2WMmdMykLeBD7DwHeJ-gbgjac7rTpIEx3ePYYY",
    },
    {
      id: String(Date.now() + 1),
      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqzTMs4pkYbGa9eW6V1oa5Ka2t_5wSk8jOAYfypsWrYrykqqUo_dNnW8BcnVhe4ZQ2SRlOXyxhUSo5hN-HZhK3zC5OkG6sRf9JP-YSboSknBPV6_F_4Wj6Yi9BdIF04rIV1pY9oHvtOHYMQOau0_5iqJp1yZ8H34Xe0Cw9nHRtI_rrxWZvxNBK7rcdvd_R6vll9XnUgJpyAmpURFfQ1RrPqF5sDZH97O4MQySxUo5fchczMxSK0mUTp8s9QCfH58VuwJqP7Ys4Xqx0",
    },
  ]);

  // variants
  const [variants, setVariants] = useState<Variant[]>([
    { id: "v1", type: "Size", values: ["S", "M", "L"] },
    { id: "v2", type: "Color", values: ["Blue", "Black"] },
  ]);

  // pick image from library
  const pickImage = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
        allowsMultipleSelection: false,
      });

      if (!result.cancelled) {
        const newItem: ImageItem = { id: String(Date.now()), uri: result.uri };
        setImages((prev) => [...prev, newItem]);
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Could not pick image.");
    }
  }, []);

  // remove image
  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((p) => p.id !== id));
  }, []);

  // reorder handler for DraggableFlatList
  const onDragEnd = useCallback(({ data }: { data: ImageItem[] }) => {
    setImages(data);
  }, []);

  // variants: add / remove variant type
  const addVariant = useCallback(() => {
    const id = `v${Date.now()}`;
    setVariants((prev) => [...prev, { id, type: "New Variant", values: [] }]);
  }, []);

  const removeVariant = useCallback((id: string) => {
    setVariants((prev) => prev.filter((v) => v.id !== id));
  }, []);

  // add value to variant
  const addVariantValue = useCallback((variantId: string, value: string) => {
    if (!value.trim()) return;
    setVariants((prev) =>
      prev.map((v) =>
        v.id === variantId ? { ...v, values: [...v.values, value.trim()] } : v
      )
    );
  }, []);

  // remove variant value
  const removeVariantValue = useCallback(
    (variantId: string, valueIdx: number) => {
      setVariants((prev) =>
        prev.map((v) =>
          v.id === variantId
            ? { ...v, values: v.values.filter((_, i) => i !== valueIdx) }
            : v
        )
      );
    },
    []
  );

  // update variant type text
  const updateVariantType = useCallback((id: string, newType: string) => {
    setVariants((prev) =>
      prev.map((v) => (v.id === id ? { ...v, type: newType } : v))
    );
  }, []);

  // save action
  const onSave = () => {
    // simple validation
    if (!name.trim())
      return Alert.alert("Validation", "Product name is required.");
    if (!price || isNaN(Number(price)))
      return Alert.alert("Validation", "Price must be a number.");

    const product = {
      name,
      description,
      price: Number(price),
      category,
      images,
      variants,
    };
    // Replace with your backend call
    console.log("Save product:", product);
    Alert.alert("Saved", "Product saved (console.log).");
  };

  // Render one image tile (draggable)
  const renderImage = ({
    item,
    index,
    drag,
    isActive,
  }: RenderItemParams<ImageItem>) => {
    return (
      <TouchableOpacity
        style={[styles.imageCard, isActive && styles.imageCardActive]}
        onLongPress={drag}
        activeOpacity={0.9}
      >
        <Image source={{ uri: item.uri }} style={styles.image} />
        <TouchableOpacity
          style={styles.imageRemove}
          onPress={() => removeImage(item.id)}
          hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
        >
          <MaterialIcons name="close" size={16} color="#fff" />
        </TouchableOpacity>
        <View style={styles.dragHandle}>
          <MaterialIcons
            name="drag_indicator"
            size={20}
            color="rgba(255,255,255,0.85)"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => Alert.alert("Close", "Close pressed")}
          >
            <MaterialIcons name="close" size={26} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Product</Text>

          <TouchableOpacity onPress={onSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* Images grid with draggable */}
        <View style={styles.section}>
          <Text style={styles.label}>Images</Text>

          <DraggableFlatList
            data={images}
            horizontal={false}
            contentContainerStyle={styles.imagesList}
            renderItem={renderImage}
            keyExtractor={(item) => item.id}
            onDragEnd={onDragEnd}
            numColumns={3}
          />

          {/* Add image tile */}
          <TouchableOpacity style={styles.addImageCard} onPress={pickImage}>
            <MaterialIcons
              name="add_photo_alternate"
              size={28}
              color="#9ca3af"
            />
            <Text style={styles.addImageText}>Add Image</Text>
          </TouchableOpacity>
        </View>

        {/* Form fields */}
        <View style={styles.section}>
          <Text style={styles.label}>Product Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Product name"
            placeholderTextColor="#7b7b7b"
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            style={[styles.input, styles.textarea]}
            placeholder="Description"
            placeholderTextColor="#7b7b7b"
            multiline
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Price</Text>
          <View style={styles.row}>
            <Text style={styles.dollar}>$</Text>
            <TextInput
              value={price}
              onChangeText={(t) => setPrice(t)}
              style={[styles.input, styles.priceInput]}
              placeholder="0.00"
              keyboardType="decimal-pad"
              placeholderTextColor="#7b7b7b"
            />
          </View>

          <Text style={[styles.label, { marginTop: 12 }]}>Category</Text>
          <TextInput
            value={category}
            onChangeText={setCategory}
            style={styles.input}
            placeholder="Category"
            placeholderTextColor="#7b7b7b"
          />
        </View>

        {/* Variants editor */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.label}>Product Variants</Text>
            <TouchableOpacity onPress={addVariant}>
              <MaterialIcons name="add-circle" size={22} color="#FF3B30" />
            </TouchableOpacity>
          </View>

          {variants.map((v) => (
            <View key={v.id} style={styles.variantCard}>
              <View style={styles.variantHeader}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={v.type}
                  onChangeText={(txt) => updateVariantType(v.id, txt)}
                />
                <TouchableOpacity
                  onPress={() => removeVariant(v.id)}
                  style={{ marginLeft: 8 }}
                >
                  <MaterialIcons name="delete" size={22} color="#FF3B30" />
                </TouchableOpacity>
              </View>

              <View style={styles.variantValues}>
                {v.values.map((val, idx) => (
                  <View key={idx} style={styles.variantPill}>
                    <Text style={styles.pillText}>{val}</Text>
                    <TouchableOpacity
                      onPress={() => removeVariantValue(v.id, idx)}
                      style={{ marginLeft: 6 }}
                    >
                      <MaterialIcons name="close" size={16} color="#FF3B30" />
                    </TouchableOpacity>
                  </View>
                ))}

                {/* add value input */}
                <AddVariantValue onAdd={(val) => addVariantValue(v.id, val)} />
              </View>
            </View>
          ))}

          <TouchableOpacity
            style={styles.addOptionButton}
            onPress={() =>
              Alert.alert(
                "Add option",
                "Add another option pressed (placeholder)"
              )
            }
          >
            <MaterialIcons name="add_circle" size={18} color="#9ca3af" />
            <Text style={styles.addOptionText}> Add another option</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* Small component to add a variant value (input + add button) */
function AddVariantValue({ onAdd }: { onAdd: (value: string) => void }) {
  const [val, setVal] = useState("");
  return (
    <View style={styles.addVariantRow}>
      <TextInput
        value={val}
        onChangeText={setVal}
        placeholder="Add"
        placeholderTextColor="#7b7b7b"
        style={[styles.input, styles.addValueInput]}
      />
      <TouchableOpacity
        style={styles.addValueBtn}
        onPress={() => {
          if (!val.trim()) return;
          onAdd(val.trim());
          setVal("");
        }}
      >
        <MaterialIcons name="add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

/* ---------- Styles ---------- */
const tileSize = (width - 48) / 3; // three columns with paddings

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  container: { flex: 1 },

  header: {
    height: 56,
    backgroundColor: "#000",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "700" },
  saveText: { color: "#FF3B30", fontWeight: "700" },

  section: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  label: { color: "#fff", fontSize: 14, fontWeight: "700", marginBottom: 8 },

  // images grid
  imagesList: {
    paddingBottom: 12,
    // DraggableFlatList will handle row wrapping when numColumns used
  },
  imageCard: {
    width: tileSize,
    height: tileSize,
    margin: 4,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#111",
  },
  image: { width: "100%", height: "100%", resizeMode: "cover" },
  imageRemove: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
    borderRadius: 14,
  },
  imageCardActive: { opacity: 0.9, transform: [{ scale: 1.02 }] },
  dragHandle: {
    position: "absolute",
    bottom: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 4,
    borderRadius: 12,
  },

  addImageCard: {
    width: tileSize,
    height: tileSize,
    margin: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#050505",
  },
  addImageText: { color: "#9ca3af", marginTop: 6 },

  // inputs
  input: {
    backgroundColor: "#0b0b0b",
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  textarea: { height: 100, paddingTop: 12, textAlignVertical: "top" },

  row: { flexDirection: "row", alignItems: "center" },
  dollar: { color: "#fff", fontSize: 18, marginRight: 8 },
  priceInput: { flex: 1 },

  // variants
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  variantCard: {
    backgroundColor: "#070707",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  variantHeader: { flexDirection: "row", alignItems: "center" },
  variantValues: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 10,
  },
  variantPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,59,48,0.08)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  pillText: { color: "#FF3B30", fontWeight: "600" },

  addVariantRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  addValueInput: {
    height: 38,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  addValueBtn: {
    backgroundColor: "#FF3B30",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  addOptionButton: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  addOptionText: { color: "#9ca3af" },

  // small helpers
  small: { color: "#9ca3af", fontSize: 12 },
});
