from django.db import models

PROPERTY_TYPES = [
    ("flat", "Flat"),
    ("commercial", "Commercial"),
    ("plot", "Open Plot"),
    ("industrial", "Industrial Gala"),
]

class Apartment(models.Model):
    title = models.CharField(max_length=200)
    price = models.IntegerField()
    location = models.CharField(max_length=255)
    description = models.TextField()

    property_type = models.CharField(
        max_length=20,
        choices=PROPERTY_TYPES,
        default="flat"
    )

    image = models.ImageField(upload_to='apartments/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title