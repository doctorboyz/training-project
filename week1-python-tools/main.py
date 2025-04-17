def cm_to_inches(cm):
    """
    แปลงความยาวจากเซนติเมตรเป็นนิ้ว
    1 นิ้ว = 2.54 เซนติเมตร
    """
    inches = cm / 2.54
    return inches

# ตัวอย่างการเรียกใช้งาน
length_cm = 160
length_inch = cm_to_inches(length_cm)

print(f"{length_cm} เซนติเมตร = {length_inch:.2f} นิ้ว")
